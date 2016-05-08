import { Pipe, PipeTransform } from '@angular/core';
/*
 * A custom date format pipe that works on older Android versions
 * The standard Angular2 Date pipe uses the Internationalization API and 
 * fails on older Android and desktop browsers.
 * The Angular2 date pipe code is shown here:
 * https://github.com/angular/angular/blob/master/modules/%40angular/common/src/pipes/date_pipe.ts
 * 
 * Currently there are only two formats in this custom pipe:
 * MM/dd/yyyy -- 12/02/2016 -- 02/02/2016
 * MM-dd-yyyy -- 12-02-2016 -- 02-02-2016
 * 
 * Feel free to add additional formats if you need them.
 * 
 */
@Pipe({ name: 'customDate' })
export class CustomDatePipe implements PipeTransform {
    transform(value: Date, format: string): string {
        if (value && format) {
            try {
                let rtn: string;
                let month: Number;
                let day: Number;
                let year: Number;
                month = value.getMonth() + 1;
                day = value.getDate();
                year = value.getFullYear();

                if (format === "MM/dd/yyyy") {
                    let mStr = month;
                    let dStr = day;
                    if (mStr < 10) {
                        mStr = "0" + mStr;
                    }
                    if (dStr < 10) {
                        dStr = "0" + dStr;
                    }
                    rtn = mStr + "/" + dStr + "/" + year;
                } else if (format === "MM-dd-yyyy") {
                    if (mStr < 10) {
                        mStr = "0" + mStr;
                    }
                    if (dStr < 10) {
                        dStr = "0" + dStr;
                    }
                    rtn = mStr + "-" + dStr + "-" + year;
                } else {
                    rtn = month + "/" + day + "/" + year;
                }
            } catch (err) {
                rtn = err.message;
            }
        } else {
            rtn = "";
        }
        return rtn;
    }
}