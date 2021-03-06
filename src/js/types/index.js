/* @flow */
'use strict';

/*
* Public types accessible from npm library
*/

import { UI_EVENT, DEVICE_EVENT, TRANSPORT_EVENT } from '../constants';
import * as TRANSPORT from '../constants/transport';
import * as POPUP from '../constants/popup';
import * as UI from '../constants/ui';
import * as DEVICE from '../constants/device';

export type CoreMessage = {
    +event: string,
    +type: string,
    +payload: any,

    id?: number, // response id in ResponseMessage
    success?: boolean, // response status in ResponseMessage
}

// Override MessageEvent type to have access to "ports" field and typed "data"
export interface PostMessageEvent extends Event {
    +origin: string,
    +lastEventId: string,
    +source: WindowProxy,
    +ports: Array<MessagePort>,
    +data: ?CoreMessage,
}

export type Deferred<T> = {
    id?: string,
    device: ?any,
    promise: Promise<T>,
    resolve: (t: T) => void,
    reject: (e: Error) => void,
};

export type Features = {
    vendor: string,
    major_version: number,
    minor_version: number,
    patch_version: number,
    bootloader_mode: boolean,
    device_id: string,
    pin_protection: boolean,
    passphrase_protection: boolean,
    language: string,
    label: string,
    // coins: CoinType[],
    coins: Array<any>,
    initialized: boolean,
    revision: string,
    bootloader_hash: string,
    imported: boolean,
    pin_cached: boolean,
    passphrase_cached: boolean,
    state?: string,
    needs_backup?: boolean,
    firmware_present?: boolean,
}

export type DeviceStatus = 'available' | 'occupied' | 'used';
export type DeviceFirmwareStatus = 'valid' | 'outdated' | 'required';

export type Device = $Exact<{
    +type: 'acquired',
    +path: string,
    +label: string,
    +firmware: DeviceFirmwareStatus,
    +status: DeviceStatus,
    state: ?string,
    features: Features,
}> | $Exact<{
    +type: 'unacquired',
    +path: string,
    +label: string,
}> | $Exact<{
    +type: 'unreadable',
    +path: string,
    +label: string,
}>

export type Settings = {
    priority?: number,
    connectSrc?: string,
    popup?: boolean,
    transportReconnect?: boolean,
    webusb?: boolean,
    pendingTransportEvent?: boolean,
}

export type T_POPUP = typeof POPUP;
export type DeviceMessageType = $Values<typeof DEVICE>;
export type DeviceMessage = {
    event: typeof DEVICE_EVENT,
    type: DeviceMessageType,
    payload: Device,
}

export type T_UI_EVENT = typeof UI_EVENT;
export type T_UI = typeof UI;
export type UiMessageType = $Values<typeof UI>;
export type UiMessage = {
    event: typeof UI_EVENT,
    type: UiMessageType,
    payload: {
        device: Device,
        code?: string,
        browser?: any,
    },
}

export type { UiResponse } from './ui-response';

export type TransportMessageType = $Values<typeof TRANSPORT>;
export type TransportMessage = {
    event: typeof TRANSPORT_EVENT,
    type: TransportMessageType,
    payload: Object,
}

/* eslint-disable no-redeclare */
declare function F_EventListener(type: typeof DEVICE_EVENT, handler: (event: DeviceMessage) => void): void;
declare function F_EventListener(type: typeof UI_EVENT, handler: (event: UiMessage) => void): void;
declare function F_EventListener(type: typeof TRANSPORT_EVENT, handler: (event: TransportMessage) => void): void;
declare function F_EventListener(type: DeviceMessageType, handler: (device: Device) => void): void;
/* eslint-enable no-redeclare */
export type EventListener = typeof F_EventListener;

import * as P from './params';
import * as R from './response';
import * as STELLAR from './stellar';

// export type UiResponseFn = (settings: UiResponse) => void;
export type ChangeSettings = (settings: Settings) => void;
export type CustomMessage = (P.$CustomMessage) => Promise<R.CustomMessage$>;
export type RequestLogin = (P.$RequestLogin) => Promise<R.RequestLogin$>;

/* eslint-disable no-redeclare */
declare function F_CipherKeyValue(params: (P.$Common & P.$CipherKeyValue)): Promise<R.CipherKeyValue$>;
declare function F_CipherKeyValue(params: (P.$Common & { bundle: Array<P.$CipherKeyValue> })): Promise<R.CipherKeyValue$$>;
/* eslint-enable no-redeclare */
export type CipherKeyValue = typeof F_CipherKeyValue;

export type ComposeTransaction = (P.$ComposeTransaction) => Promise<R.ComposeTransaction$>;

/* eslint-disable no-redeclare */
declare function F_EthereumGetAddress(params: (P.$Common & P.$EthereumGetAddress)): Promise<R.EthereumGetAddress$>;
declare function F_EthereumGetAddress(params: (P.$Common & { bundle: Array<P.$EthereumGetAddress> })): Promise<R.EthereumGetAddress$$>;
/* eslint-enable no-redeclare */
export type EthereumGetAddress = typeof F_EthereumGetAddress;

export type EthereumSignMessage = (P.$EthereumSignMessage) => Promise<R.EthereumSignMessage$>;
export type EthereumSignTransaction = (P.$EthereumSignTransaction) => Promise<R.EthereumSignTransaction$>;
export type EthereumVerifyMessage = (P.$EthereumVerifyMessage) => Promise<R.EthereumVerifyMessage$>;
export type GetAccountInfo = (P.$GetAccountInfo) => Promise<R.GetAccountInfo$>;

/* eslint-disable no-redeclare */
declare function F_GetAddress(params: (P.$Common & P.$GetAddress)): Promise<R.GetAddress$>;
declare function F_GetAddress(params: (P.$Common & { bundle: Array<P.$GetAddress> })): Promise<R.GetAddress$$>;
/* eslint-enable no-redeclare */
export type GetAddress = typeof F_GetAddress;

export type GetDeviceState = (P.$GetDeviceState) => Promise<R.GetDeviceState$>;
export type GetFeatures = (P.$GetFeatures) => Promise<R.GetFeatures$>;

/* eslint-disable no-redeclare */
declare function F_GetPublicKey(params: (P.$Common & P.$GetPublicKey)): Promise<R.GetPublicKey$>;
declare function F_GetPublicKey(params: (P.$Common & { bundle: Array<P.$GetPublicKey> })): Promise<R.GetPublicKey$$>;
/* eslint-enable no-redeclare */
export type GetPublicKey = typeof F_GetPublicKey;

/* eslint-disable no-redeclare */
declare function F_NEMGetAddress(params: (P.$Common & P.$NEMGetAddress)): Promise<R.NEMGetAddress$>;
declare function F_NEMGetAddress(params: (P.$Common & { bundle: Array<P.$NEMGetAddress> })): Promise<R.NEMGetAddress$$>;
/* eslint-enable no-redeclare */
export type NEMGetAddress = typeof F_NEMGetAddress;

export type NEMSignTransaction = (P.$NEMSignTransaction) => Promise<R.NEMSignTransaction$>;
export type PushTransaction = (P.$PushTransaction) => Promise<R.PushTransaction$>;
export type SignMessage = (P.$SignMessage) => Promise<R.SignMessage$>;
export type SignTransaction = (P.$SignTransaction) => Promise<R.SignTransaction$>;

/* eslint-disable no-redeclare */
declare function F_StellarGetAddress(params: (P.$Common & STELLAR.$StellarGetAddress)): Promise<STELLAR.StellarGetAddress$>;
declare function F_StellarGetAddress(params: (P.$Common & { bundle: Array<STELLAR.$StellarGetAddress> })): Promise<STELLAR.StellarGetAddress$$>;
/* eslint-enable no-redeclare */
export type StellarGetAddress = typeof F_StellarGetAddress;

export type StellarSignTransaction = (STELLAR.$StellarSignTransaction) => Promise<STELLAR.StellarSignTransaction$>;
export type VerifyMessage = (P.$VerifyMessage) => Promise<R.VerifyMessage$>;

// export * from './params';
export * from './response';
