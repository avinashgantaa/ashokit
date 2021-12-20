import {Injectable} from '@angular/core';
@Injectable({
    providedIn:'root'
})
export default class empService{
    public employees():any{
        return [
            {"emp_id":"e_101","emp_name":"e_one","esal":10000},
            {"emp_id":"e_102","emp_name":"e_two","esal":20000},
            {"emp_id":"e_103","emp_name":"e_three","esal":30000},
            {"emp_id":"e_104","emp_name":"e_four","esal":40000},
            {"emp_id":"e_105","emp_name":"e_five","esal":50000}
        ]
    }

    public employsal():any{
        return [
            {'emp_id':'e101','e_name':'e_one','e_sal':12000},
            {'emp_id':'e102','e_name':'e_two','e_sal':24000},
            {'emp_id':'e103','e_name':'e_three','e_sal':36000},
            {'emp_id':'e104','e_name':'e_four','e_sal':48000},
            {'emp_id':'e105','e_name':'e_five','e_sal':60000}
        ]
        
    }
}