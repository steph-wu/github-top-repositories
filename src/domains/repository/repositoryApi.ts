import axios from 'axios'
import dayjs from 'dayjs';

export interface IFetchRepositoriesRequest {
  createdAfter: Date;
  page?: number;
  language?: string;
}

export interface IFetchRepositoriesResponse {
  items: {
    id: number;
    description: string | null;
    name: string;
    html_url: string;
    stargazers_count: number;
  }[];
  total_count: number;
}

const fetchRepositories = ({
  createdAfter,
  page = 1
}: IFetchRepositoriesRequest) => {
  const formattedCreatedAfter = dayjs(createdAfter).format('YYYY-MM-DD');

  return axios.get<IFetchRepositoriesResponse>(
    `https://api.github.com/search/repositories?q=created:>${formattedCreatedAfter}&sort=stars&order=desc&page=${page}&per_page=10`
  )
}

export default {
  fetchRepositories,
}
