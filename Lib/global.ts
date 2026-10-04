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
    public empid : number=123456;



    //************Objects/Element Locators of Application**************//

    public txtBox_Username="//input[@name='txtUserName']";
    public txtBox_Password="//input[@name='txtPassword']";
    public bth_Login="//input[@type='Submit']";
    public link_Logout="//a[text()='Logout']";
    public hover_PIM="PIM"
    public Add_Employee="Add Employee"
    public frame_empInfo : string    = "//iframe[@id='rightMenu']";
public button_add : string       = "//input[@value='Add']";
public textbox_empfirstname : string = "//input[@name='txtEmpFirstName']";
public textbox_emplastname : string  = "//input[@name='txtEmpLastName']";
public button_save : string          = "//input[@value='Save']";


//     public frame_Loc="//iframe[@id='rightMenu']"
//     public txtbox_FirstName="//input[@id='txtEmpFirstName']"
//     public txtbox_LastName="//input[@name='txtEmpLastName']"
     public txtbox_EmpID="//input[@name='txtEmployeeId']"
//     public btn_Save="//input[@class='savebutton']"

}