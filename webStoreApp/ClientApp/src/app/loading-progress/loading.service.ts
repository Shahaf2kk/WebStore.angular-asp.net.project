import * as Rx from 'rxjs';

export class LoadingService {

    private loadingSubject = new Rx.Subject();
    getLoadingSubject = this.loadingSubject.asObservable();

    setLoading(res: boolean) {
        this.loadingSubject.next(res);
    }

    unsubscribe() {
        this.loadingSubject.unsubscribe();
    }

}
