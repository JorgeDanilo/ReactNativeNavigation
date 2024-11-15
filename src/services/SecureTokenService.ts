import storage from '../presentation/config/Storage';
import { ITokenService } from './ITokenService';

export class SecureTokenService implements ITokenService {

  async getToken(): Promise<string | null> {
    return await storage.load( {
      key: 'userToken',
      autoSync: true,
    } );

  }
  
  async setToken( token: string ): Promise<void> {
    return await storage.save( {
      key: 'userToken',
      data: {
        from: 'token type',
        token: 'ABC12345'
      },
      expires: 1000 * 3600
    } );
  }

  async removeToken(): Promise<void> {
    return storage.remove( {
      key: 'userToken'
    } );
  }

}