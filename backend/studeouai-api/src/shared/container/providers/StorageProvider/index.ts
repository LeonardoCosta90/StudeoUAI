import { LocalStorageProvider } from './implementations/LocalStorageProvider';
import { S3StorageProvider } from './implementations/S3StorageProvider';
import { IStorageProvider } from './IStorageProvider';

const storageType = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

class StorageProvider {
  async storage(): Promise<IStorageProvider> {
    return storageType[process.env.STORAGE_TYPE];
  }
}

export { StorageProvider };
