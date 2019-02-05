/**
 *
 * @format
 * @flow
 * */
export const TERA_GET_ACCOUNT_BY_PUBLIC_KEY_REQUEST = 'TERA_GET_ACCOUNT_BY_PUBLIC_KEY_REQUEST';
export const TERA_GET_ACCOUNT_BY_PUBLIC_KEY_SUCCESS = 'TERA_GET_ACCOUNT_BY_PUBLIC_KEY_SUCCESS';
export const TERA_GET_ACCOUNT_BY_PUBLIC_KEY_FAILED = 'TERA_GET_ACCOUNT_BY_PUBLIC_KEY_FAILED';
export const TERA_GET_ACCOUNT_BY_PUBLIC_KEY_EMPTY = 'TERA_GET_ACCOUNT_BY_PUBLIC_KEY_EMPTY';

export const getAccountsByPublicKey = ({ publicKey }: { publicKey: string }) => ({
  type: TERA_GET_ACCOUNT_BY_PUBLIC_KEY_REQUEST,
  payload: {
    publicKey,
  },
});
