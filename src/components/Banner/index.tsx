import Button from 'components/Button'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  buttonLabel,
  buttonLink,
  img,
  subtitle,
  title
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner
