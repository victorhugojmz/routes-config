import { Headers } from '@angular/http';
export function myHeaders(): any {
    const headers = new Headers();
    headers.append('Content-type','application/json; charset=utf-8');
    headers.append('X-Requested-With','XMLHttpRequest');
    headers.append('Access-Control-Allow-Origin','*');
    return { headers };
}