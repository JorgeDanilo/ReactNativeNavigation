import { IAuthService } from './IAuthService';
import { ITokenService } from './ITokenService';

export class AuthService implements IAuthService {

  constructor( private tokenService: ITokenService ) { }

  async login( username: string, password: string ): Promise<string> {
    const token = await fakeAuthAPI( username, password );
    await this.tokenService.setToken( token );
    return token;
  }

  async logout(): Promise<void> {
    await this.tokenService.removeToken();
  }

}

function fakeAuthAPI( username: string, password: string ): Promise<string> {
  return new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      username === 'user' && password === 'pass' ? resolve( 'fake-token' ) : reject( 'Invalid credentials' );
    }, 1000 );
  } );
}
