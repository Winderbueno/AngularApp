export enum AlertTypeEnum {
  Success,
  Error,
  Info,
  Warning
}

// CSS Class
export const AlertTypeEnumClass = {
  [AlertTypeEnum.Success]: 'alert-success',
  [AlertTypeEnum.Error]: 'alert-danger',
  [AlertTypeEnum.Info]: 'alert-info',
  [AlertTypeEnum.Warning]: 'alert-warning'
}
