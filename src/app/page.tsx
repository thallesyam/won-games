import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index() {
  const props: HomeTemplateProps = {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcommingGames: gamesMock,
    upcommingHighligth: highlightMock,
    upcommingMoreGames: gamesMock,
    freeGames: gamesMock,
    freeHighligth: highlightMock
  }

  return <Home {...props} />
}