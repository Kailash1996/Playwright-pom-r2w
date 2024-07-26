import exp from "constants"

export const login = {

userIdInputBox: 'xpath=//input[@id="userId"]',
passwordInputBox: 'xpath=//input[@id="password"]',
loginButton: 'xpath=//button[@id="signOn"]',
homeTab: 'xpath=//a[@tabid="Home"]',

}

export const leftNavigationMenu = {
    selectFolder: 'xpath=//div[contains(text(),"Folders")]',
    iFrame: 'iframe[name="ifmfolder"]',
    
}

export const fileUpload = {
    enterAuthorName: 'xpath=//input[@id="memberName"]',    

}

export const subfoldercreation = {
    subFolderName: 'xpath=//input[@id="value0"]',
}

export const publicationProfile = {
    publicationMenu: 'xpath=//div[@id="publishing"]',
    createPublicationProfile: 'xpath=//div[text()="Publication Profiles"]',  
    profileName: 'xpath=//input[@id="pubProfileName"]',
    nextButton: 'xpath=//button[@name="next"]',
    checkboxAsctoPdf: 'xpath=//input[@id="ascToPdf"]',
    publicationiFrame: 'iframe[name="ifmpub"]',
    retaintionTimeDuration: 'xpath=//input[@id="retentionTimeValue"]',
    finishButton: 'xpath=//button[text()="Finish"]',
    deleteTitle: 'xpath=//a[@title="publish"]',
}

export const userProfile = {
    securityMenuClick: 'xpath=//div[@id="security"]',
    memberMenuClick: 'xpath=//div[text()="Members"]',
    memberIdTextBox: 'xpath=//input[@name="memberId"]',
    memberPasswordTextBox: 'xpath=//input[@name="password"]',
    memberPasswordConfirmTextBox: 'xpath=//input[@name="passwordConfirmation"]',
    memberNameTextBox: 'xpath=//input[@name="memberName"]',
    memberEmailTextBox: 'xpath=//input[@name="email"]',
    memberSaveButton: 'xpath=//button[@id="save"]',
    roleMenuClick: 'xpath=//div[text()="Roles"]',
    roleAddNameTextBox: 'xpath=//input[@name="displayName"]',
    roleDescriptionTextBox: 'xpath=//input[@name="description"]',
    roleSelectOption: 'xpath=//option[text()="Available Authorizations"]',
    roleAddSelectedOption: 'xpath=//input[@id="addPermsPB"]',
    roleSaveButton: 'xpath=//button[@id="save"]',

}

export const publicationMatchRule = {

    matchRuleMenu: 'xpath=//div[text()="Match Rules"]',
    patternNameTextBox: 'xpath=//input[@id="pattern"]',
}

export const securityContentAccess = {
    securityMenuClick: 'xpath=//div[@id="security"]',
    contentAccessMenuClick: 'xpath=//div[text()="Content Access"]',
    contentAccessAddButton: 'xpath=//a[text()="Add Content Access"]',
    contentAccessLookUpTextBox: 'xpath=//input[@id="msLookUpText"]',
    contentAccessAddArrowButton: 'xpath=//img[@title="Add"]',
    contentAccessNextButton: 'xpath=//button[@name="next"]',
    contentAccessSaveButton: 'xpath=//button[@id="save"]',    
    contentAccessDeleteButton: 'xpath=//button[@id="delete"]',

}

export const toolBarIcons = {
    homeMenuIcon: 'xpath=//img[@title="Report2Web Home"]',
    personalFolderMenuIcon: 'xpath=//img[@title="Report2Web Personal Folder"]',
    preferancesMenuIcon: 'xpath=//img[@title="Report2Web Preferences"]',
    favoritesMenuIcon: 'xpath=//img[@title="Report2Web Favorites"]',
    historyMenuIcon: 'xpath=//img[@title="Report2Web History"]',
    selectionMenuIcon: 'xpath://img[@title="Report2Web Selections"]',
    subscriptionMenuIcon: 'xpath=//img[@title="Report2Web Subscriptions"]',

}
export const Schedulerjobs = {
    schedulerjobicon: 'xpath=//a[@tabid="Scheduler Jobs"]',
    Schedulerjobsclick : 'xpath=//div[text()="Scheduler Jobs"]',
    catalogmenuiframe : 'xpath=//iframe[@id="ifmcatalog"]',
    catalogmenuclick :'xpath=//div[@id="catalog"]' ,
    R2W_DB_Cleanup: 'xpath=//a[text() ="R2W_DB_Cleanup"]',
    R2W_Ldap_Synch: 'xpath=//a[text() ="R2W_Ldap_Synch"]',
    R2W_Reset_License: 'xpath=//a[text() ="R2W_Reset_License"]',
    R2W_Stat_Logger: 'xpath=//a[text() ="R2W_Stat_Logger"]',
    R2W_Subscriptions: 'xpath=//a[text() ="R2W_Subscriptions"]',
    R2W_Tempfile_Cleanup: 'xpath=//a[text() ="R2W_Tempfile_Cleanup"]',
    R2W_Version_Retention: 'xpath=//a[text() ="R2W_Version_Retention"]',
    Contentframe: 'xpath=//iframe[@id = "main"]',
    Executejob: 'xpath = //div[text()="Execute Now"]' 
}
export const ldap = {
    environmentmenu : 'xpath=//div[text()="Environment"]',
    Ldapmenuframe : 'xpath=//iframe[@id="ifmenvironment"]', 
    catalogclick : 'xpath=//div[text() ="Catalogs"]',
    Contentframe: 'xpath=//iframe[@id = "main"]',
    addldap : 'xpath=//a[@Id ="addLdapLink"]',
    ldapname : 'xpath=//input[@id="ldapName"]',
    ldapurl : 'xpath=//input[@id="ldapUrl"]',
    ldapbasedn : 'xpath=//input[@id="ldapBaseDN"]',
    ldappass : 'xpath=//input[@id="ldapBindPassword"]',
    ldapbinddn : 'xpath=//input[@id="ldapBindDN"]',



} 