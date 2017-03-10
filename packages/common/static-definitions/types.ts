import { Constructable } from '../utils';

// @TODO this should maybe be a part of Skate
export type IntrinsicCustomElement<P> = P & Partial<HTMLElement>;
// @TODO this should maybe be a part of Bore
export type IntrinsicBoreElement<A, E> = { attrs?: A } & { events?: E };


export type MixinClass<Base, Mixer> = Base & Constructable<Mixer>;
