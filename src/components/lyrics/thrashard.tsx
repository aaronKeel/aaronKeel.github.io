import * as React from 'react';

import { Lyrics, LyricsWrapperProps } from './lyrics';

import txt from '../../content/thrashard.txt';

export const Thrashard = ({ className }: LyricsWrapperProps): JSX.Element => <Lyrics className={className} lyrics={txt} />;
