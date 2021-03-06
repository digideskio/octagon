export function getAlertIconClassName (status) {
  if (status === 'success') return 'ei icon_check_alt2'
  if (status === 'information' || status === 'info') return 'ei icon_info_alt'
  if (status === 'warning') return 'ei icon_error-triangle_alt'
  if (status === 'error') return 'ei icon_error-circle_alt'
  return ''
}
