import * as React from 'react';

import { Lyrics, LyricsWrapperProps } from './lyrics';

import txt from '../../content/youth-and-lust.txt';

export const YouthAndLust = ({ className }: LyricsWrapperProps): JSX.Element => <Lyrics className={className} lyrics={txt} />;
