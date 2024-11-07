import { AccessTokenResponse } from "@/api/devbookClient";

export const AccessTokenLocalStorageKey = "ACCESS_TOKEN";
export const RefreshTokenLocalStorageKey = "REFRESH_TOKEN";

class UserTokenStore {
	get accessToken() {
		return localStorage.getItem(AccessTokenLocalStorageKey);
	}

	get refreshToken() {
		return localStorage.getItem(RefreshTokenLocalStorageKey);
	}

	setTokens = (accessTokenResponse: AccessTokenResponse) => {
		localStorage.setItem(AccessTokenLocalStorageKey, accessTokenResponse.accessToken ?? "");
		localStorage.setItem(RefreshTokenLocalStorageKey, accessTokenResponse.refreshToken ?? "");
	};

	removeTokens = () => {
		localStorage.removeItem(AccessTokenLocalStorageKey);
		localStorage.removeItem(RefreshTokenLocalStorageKey);
	};
}

export function useUserTokenStore() { return new UserTokenStore(); }