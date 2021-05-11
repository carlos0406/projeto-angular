import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjYXJsb3M0QGNhcmxvcy5jb20iLCJleHAiOjE2MjA3MDExNTMsImlhdCI6MTYyMDYxNDc1M30.kskDPdXWFH44fQOjd4i7o-DSGZAkjkictq5iCjVmmSp1Vw1neT-0N87k-HD7kXK2gaZBRvoC3HAIOEh-B1UCBg"
    }),
    params: new HttpParams()

  }
  apiUrl = 'https://projeto-api-tarefas.herokuapp.com/tarefas';



  constructor(private httpClient: HttpClient) {

  }

  public getTasks(titulo: string, situacao: boolean, limite: number, nomeResponsavel: string)
    : Observable<Task[]> {


    this.httpOptions.params.set("titulo", titulo)
      .set("situacao", String(situacao))
      .set("limite", String(limite))
      .set("nomeResponsavel", nomeResponsavel)

    return this.httpClient.get<Task[]>(this.apiUrl, this.httpOptions);

  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`, this.httpOptions);


  }
} 
