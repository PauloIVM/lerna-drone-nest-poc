import { sign, verify } from "jsonwebtoken";

export class TokenManager {
	private expiresIn: number;
	private readonly secret: string

	constructor () {
		this.secret = "SUPER_SECRET";
		this.setExpiresInDays(30);
	}

	sign(id: string, date: Date) {
		return sign({
            userId: id,
            exp: Math.floor(date.getTime() / 1000) + this.expiresIn
        }, this.secret);
	}

	verify(token: string): { userId: string; } {
		try {
			return verify(token, this.secret) as { userId: string; };
		} catch (error) {
			throw new Error("Expired or invalid token");
		}
	}

	setExpiresInDays(days: number) {
		this.expiresIn = days * 24 * 60 * 60;
		return this;
	}

	setExpiresInHours(hours: number) {
		this.expiresIn = hours * 60 * 60;
		return this;
	}

	setExpiresInMinutes(minutes: number) {
		this.expiresIn = minutes * 60;
		return this;
	}

	setExpiresInSeconds(seconds: number) {
		this.expiresIn = seconds;
		return this;
	}
}
