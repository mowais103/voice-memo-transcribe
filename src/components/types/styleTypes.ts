import {Icons} from '../../assets';
import {Colors} from '../styles/common';

type TStandardSizes =
  | 'xxs'
  | 'xs'
  | 'small'
  | 'medium'
  | 'large'
  | 'xl'
  | 'xxl';

type TSpacing = Exclude<TStandardSizes, 'xxl'>;

type TColor = keyof typeof Colors;
type TIcons = keyof typeof Icons;

type TFontSize = Exclude<TStandardSizes, 'xxs'>;

type TIconSize = Exclude<TStandardSizes, 'xxs' | 'xs'>;

export type {TSpacing, TColor, TFontSize, TStandardSizes, TIconSize, TIcons};
