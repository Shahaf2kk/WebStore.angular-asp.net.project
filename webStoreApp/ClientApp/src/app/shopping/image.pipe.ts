import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'stringSplit'
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
