export enum AlertTypeEnum {
  Success = "Success",
  Error = "Error",
  Info = "Info",
  Warning = "Warning"
}

// CSS Class
// TODO -> CSS Class could be generated as 'alert'+ToLower(AlertTypeEnum)
export const AlertTypeEnumClass = {
  [AlertTypeEnum.Success]: 'alert-success',
  [AlertTypeEnum.Error]: 'alert-danger',
  [AlertTypeEnum.Info]: 'alert-info',
  [AlertTypeEnum.Warning]: 'alert-warning'
}
