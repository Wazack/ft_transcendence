export enum LogActionType {
    SETUSERNAME = "SETUSERNAME",
    SETID = "SETID"
}

export enum utilsActionType {

}

export enum clientListActionType {
    ADDCLIENT = "ADDCLIENT",
    REMOVECLIENT = "REMOVECLIENT",
    ADDMSG = "ADDMSG",
    SETACTIVECONVERS = "SETACTIVECONVERS"
}

export enum userActionType {
    SETUSER = "SETUSER"
}

export enum notifActionType {
    SETNOTIF = "SETNOTIF",
    DELNOTIF = "DELNOTIF",
    DELALLNOTIF = "DELALLNOTIF",
    SETALLNOTIFSEEN = "SETALLNOTIFSEEN"
}

export enum chatNotifActionType {
    ADDCHATNOTIF = "ADDCHATNOTIF",
    DELCHATNOTIF = "DELCHATNOTIF",
    INITCHATNOTIF = "INITCHATNOTIF",
    INITONECONVERSCHATNOTIF = "INITONECONVERSCHATNOTIF",
    SETCONVERS = "SETCONVERS"
}

export enum twoFactorActionType {
    SETTWOFACTOR = "SETTWOFACTOR"
}

export enum inviteCheckActionType {
    SETINVITECHECK = "SETINVITECHECK",
    SETINVITECHECKRELOAD = "SETINVITECHECKRELOAD"
}