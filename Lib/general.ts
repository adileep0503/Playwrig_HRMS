import { expect } from "@playwright/test";
import { global } from "./global";

//Resuable functions and methods will be available
export class general extends global{

    async openApplication(){
        await this.page.goto(this.url);
        console.log("Application opened");
    }

    async login(){
        await this.page.locator(this.txtBox_Username).fill(this.userName);
        await this.page.locator(this.txtBox_Password).fill(this.password);
        await this.page.locator(this.bth_Login).click();
        console.log("Login COmpleted");
    }

    async OpenAddEmployeePage(){
        await this.page.getByText(this.hover_PIM).hover();
        await this.page.getByText(this.Add_Employee).click();

        // const frame = this.page.frameLocator(this.frame_Loc);
        // await frame.locator(this.btn).click();
        console.log("Add employee Page opened")
    }

    async AddEmployee(){
        this.frame = this.page.frameLocator(this.frame_Loc);
        console.log("frame entered");
        await this.frame.locator(this.txtbox_FirstName).fill(this.firstNmae);
        await this.frame.locator(this.txtbox_LastName).fill(this.lastName);
        await this.frame.locator(this.btn_Save).click();
        console.log("New employee added");
    }

    async getEmpID(){
        this.empid=await this.frame.locator(this.txtbox_EmpID).inputValue();
        console.log('Newly created Emp ID:', this.empid);
    }

    async verifyEmpCreated(){

        await expect(this.frame.locator(this.headingPersonal)).toHaveText("Personal");
        await expect(this.frame.locator(this.txtbox_EmpID)).toHaveValue(this.empid);
        console.log("New employeed Created");
    } 

    async backToEmpListpage(){
        await this.frame.locator(this.btn_Back).click()
    }

    async seachEmployee(){
        await this.page.waitForTimeout(5000);
        await expect(this.frame.locator(this.headingEmpInfo)).toHaveText("Employee Information");
        console.log("Employee Information page opened");
        //Goto Search By Filter Dropdown and select EmpId
        await this.frame.locator("//select[@name='loc_code']").selectOption("Emp. ID")
        //Goto search Edit Field and enter Emp Id
        await this.frame.locator(this.txtbox_SearchFor).fill(this.empid);
                //Goto Search Button and click
        await this.frame.locator(this.btn_Search).click();
        console.log("Employee List filtered.")
    
    }

    async editEmployee(){
        await this.frame.locator(this.link_EmpName).click()
        await this.page.pause();
        await this.frame.locator(this.btn_Edit).click();
        await this.page.waitForTimeout(5000);
        await this.frame.locator("//select[@id='cmbNation']").selectOption({ value: "NAT002" });
        await this.frame.locator(this.btn_SavefromEditPage).click()
        //Goto Date of Birth 



    }

    async logout(){
        await this.page.locator(this.link_Logout).click();
        await this.page.pause();
        console.log("Logout COmpleted");
    }

    async waitFun(){
        await this.page.waitForTimeout(3000);
    }

    async closeApplication(){
    }
   
}