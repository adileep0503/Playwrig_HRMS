import {expect, test} from '@playwright/test'
import { general } from '../Lib/general';

test('Add Employee Test Case', async({page})=>{
    let obj=new general(page);
    await obj.openApplication();
    await obj.login();
    //Add Employee Steps
    await obj.OpenAddEmployeePage();
    //await obj.waitFun();
    await obj.AddEmployee();
    await obj.getEmpID();
    //Verify Employee Created or not.
    //await obj.waitFun();
    await obj.verifyEmpCreated();
    //Got to Employee Information Page
    await obj.backToEmpListpage();
    //await  obj.waitFun();
    await obj.seachEmployee();
    await obj.logout();

});