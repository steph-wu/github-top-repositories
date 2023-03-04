import { IFetchRepositoriesResponse } from './repositoryApi';
import { IRepositoryStore } from './repositorySlice';
import { IRepository } from './repositoryTypes';

export const mockfetchRepositoriesResponse: IFetchRepositoriesResponse = {
  items: [
    {
      id: 606908544,
      description: 'JS Expert Week 7.0 - Controlling Streaming Platforms using Eye and Hand Detection',
      name: 'semana-javascript-expert07',
      html_url: 'https://github.com/ErickWendel/semana-javascript-expert07',
      stargazers_count: 2173
    },
    {
      id: 608490374,
      description: 'A demo repo based on OpenAI API (gpt-3.5-turbo)',
      name: 'chatgpt-demo',
      html_url: 'https://github.com/ddiu8081/chatgpt-demo',
      stargazers_count: 1182
    },
    {
      id: 609173001,
      description: null,
      name: 'CS-GO-HACK-ESP-AIM-More-functionality-Your-website',
      html_url: 'https://github.com/kisspig123/CS-GO-HACK-ESP-AIM-More-functionality-Your-website',
      stargazers_count: 878
    },
    {
      id: 609171127,
      description: null,
      name: 'RUST-HACK-ESP-AIMBOT-More-functionality-Your-website',
      html_url: 'https://github.com/kisspig123/RUST-HACK-ESP-AIMBOT-More-functionality-Your-website',
      stargazers_count: 378
    }
  ],
  total_count: 27493,
}

export const mockRepositoryItem: IRepository = {
  id: 609184067,
  description: 'Ready or not aim',
  name: 'NcCrack-Ready-or-Not-Aim-Misc',
  htmlUrl: 'https://github.com/evan0736/NcCrack-Ready-or-Not-Aim-Misc',
  stars: 874
}

export const mockFavRepositoryItem: IRepository = {
  id: 608490374,
  description: 'A demo repo based on OpenAI API (gpt-3.5-turbo)',
  name: 'chatgpt-demo',
  htmlUrl: 'https://github.com/ddiu8081/chatgpt-demo',
  stars: 1182
}

export const mockRepositoriesState: IRepositoryStore = {
  repositories: {
    entities: [
      mockRepositoryItem,
      mockFavRepositoryItem,
      {
        id: 609173001,
        description: null,
        name: 'CS-GO-HACK-ESP-AIM-More-functionality-Your-website',
        htmlUrl: 'https://github.com/kisspig123/CS-GO-HACK-ESP-AIM-More-functionality-Your-website',
        stars: 878
      },
      {
        id: 609171127,
        description: null,
        name: 'RUST-HACK-ESP-AIMBOT-More-functionality-Your-website',
        htmlUrl: 'https://github.com/kisspig123/RUST-HACK-ESP-AIMBOT-More-functionality-Your-website',
        stars: 378
      }
    ],
    currentPage: 1,
    error: false
  },
  favourites: {
    entities: [
      mockFavRepositoryItem,
      {
        id: 606908544,
        description: 'JS Expert Week 7.0 - Controlling Streaming Platforms using Eye and Hand Detection',
        name: 'semana-javascript-expert07',
        htmlUrl: 'https://github.com/ErickWendel/semana-javascript-expert07',
        stars: 2173
      },
    ],
    ids: [606908544, mockFavRepositoryItem.id]
  }
}
