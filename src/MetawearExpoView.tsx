import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MetawearExpoViewProps } from './MetawearExpo.types';

const NativeView: React.ComponentType<MetawearExpoViewProps> =
  requireNativeViewManager('MetawearExpo');

export default function MetawearExpoView(props: MetawearExpoViewProps) {
  return <NativeView {...props} />;
}
