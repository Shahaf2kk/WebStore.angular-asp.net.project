import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'oneImage'
})
export class ImagePipe implements PipeTransform {
    transform(array: string): any {
        if (!array) {
            return '';
        }
        const newArray = array.split(',', array.length);
        return newArray[0];
    }
}
