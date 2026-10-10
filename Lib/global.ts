import {Page} from '@playwright/test'

export class global{

    constructor(public page : Page){

    }

    //************TestData of Application**************//

    public url = "https://sureshitacademy.in/hrms/login.php";
    public userName="sureshit"
    public password="sureshit"
    public firstNmae="Dileep"
    public lastName="Kumar"
    public empid;
    public frame;

    //************Objects/Element Locators of Application**************//
    public txtBox_Username="//input[@name='txtUserName']";
    public txtBox_Password="//input[@name='txtPassword']";
    public bth_Login="//input[@type='Submit']";
    public link_Logout="//a[text()='Logout']";
    public hover_PIM="PIM"
    public Add_Employee="Add Employee";
    public frame_Loc="//iframe[@id='rightMenu']"
    public txtbox_FirstName="//input[@id='txtEmpFirstName']"
    public txtbox_LastName="//input[@name='txtEmpLastName']"
    public txtbox_EmpID="//input[@name='txtEmployeeId']"
    public btn_Save="//input[@class='savebutton']"
    public btn_Back="//input[@value='Back']"
    public headingPersonal="//span[@class='parent personal']"
    public headingEmpInfo="//h2"
    public DD_SearchBy='[name="loc_code"]';
    public txtbox_SearchFor="//input[@id='loc_name']"
    public btn_Search="//input[@value='Search']"

    public link_EmpName="//tbody/tr[1]//td[3]/a[1]"
    public btn_Edit="//input[@value='Edit']"
    public btn_SavefromEditPage="//input[@id='btnEditPers']"


}