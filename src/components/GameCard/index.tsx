import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from 'styled-icons/material-outlined'
import * as S from './styles'
import Button from 'components/Button'
import Ribbon, { RibbonColorsProps, RibbonSizesProps } from 'components/Ribbon'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  onFav?: () => void
  ribbon?: string
  ribbonColor?: RibbonColorsProps
  ribbonSize?: RibbonSizesProps
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
