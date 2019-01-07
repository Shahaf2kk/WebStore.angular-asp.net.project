import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'oneImage'
})
export class ImagePipe implements PipeTransform {
    transform(array: {url: string, show: boolean}[]): string {
        return array[0].url;
    }
}
