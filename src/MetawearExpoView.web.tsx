import * as React from 'react';

import { MetawearExpoViewProps } from './MetawearExpo.types';

export default function MetawearExpoView(props: MetawearExpoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
