import UseCom from './useCom';
import { sleep } from '@/utils/mock';

/**
 * @link [use client](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
 * @returns 
 */
export default function () {

  async function loadSuccess(){
    'use server';
    const time = await sleep(250);
    return 'here wait: ' + time + ' and dir: ' + __dirname;
  }

  return <main>
    <h2>
      About Detail
    </h2>
    <h3>{loadSuccess()}</h3>
    <UseCom />
  </main>
}