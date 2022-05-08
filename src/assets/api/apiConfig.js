
const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '428e538c87f5ff4697e9513dea979953',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`
}

export default apiConfig;