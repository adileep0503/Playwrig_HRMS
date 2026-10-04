import {test} from '@playwright/test'
import { general } from '../Lib/general';

test('Add Employee Test Case', async({page})=>{

    let obj=new general(page);
    await obj.openApplication();
    await obj.login();
    //Add Employee Steps
    await obj.OpenAddEmployeePage();
    await obj.AddEmployee();
    await obj.logout();

});