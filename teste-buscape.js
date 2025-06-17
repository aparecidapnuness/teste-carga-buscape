import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1000,
  duration: '10s',
};

export default function () {
  const res = http.get('https://www.buscape.com.br/search?q=celular');

  check(res, {
    'status é 200': (r) => r.status === 200,
  });

  sleep(1);
}
