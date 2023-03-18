import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to MetawearExpo.web.ts
// and on native platforms to MetawearExpo.ts
import MetawearExpoModule from './MetawearExpoModule';
import MetawearExpoView from './MetawearExpoView';
import { ChangeEventPayload, MetawearExpoViewProps } from './MetawearExpo.types';

// Get the native constant value.
export const PI = MetawearExpoModule.PI;

export function hello(): string {
  return MetawearExpoModule.hello();
}

export async function setValueAsync(value: string) {
  return await MetawearExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(MetawearExpoModule ?? NativeModulesProxy.MetawearExpo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MetawearExpoView, MetawearExpoViewProps, ChangeEventPayload };
