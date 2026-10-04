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
        /* await this.page.getByText(this.hover_PIM).hover();
        await this.page.getByText(this.Add_Employee).click(); */

        const frame = this.page.frameLocator(this.frame_empInfo);
        await frame.locator(this.button_add).click();
        console.log("Add employee Page opened")
    }

    async AddEmployee(){
        const frame = this.page.frameLocator(this.frame_empInfo);
        await frame.locator(this.textbox_empfirstname).fill(this.firstNmae);
        await frame.locator(this.textbox_emplastname).fill(this.lastName);
        await frame.locator(this.button_save).click();
        console.log("New employee added");



        /* await this.page.waitForTimeout(3000);
        const frame_AddEmp=this.page.frameLocator(this.frame_empInfo);
        await frame_AddEmp.locator(this.txtbox_FirstName).fill(this.firstNmae);
        await frame_AddEmp.locator(this.txtbox_LastName).fill(this.lastName);
        await frame_AddEmp.locator(this.btn_Save).click();
        console.log("New employee added successfully") */
    }

    async logout(){
        await this.page.locator(this.link_Logout).click();
        console.log("Logout COmpleted");

    }

    async closeApplication(){
    }

    
}