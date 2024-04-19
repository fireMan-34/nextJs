import { Metadata } from 'next';
import { sleep } from '@/utils/mock';
import UseCom from './useCom';

// 元数据避免流式传输重叠
export const metadata: Metadata = {
  title: '什么叫做语言',
};

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