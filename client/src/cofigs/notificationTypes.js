export default {
  "NOTIFICATION_TYPE_SUCCESS": "SUCCESS",
  "NOTIFICATION_TYPE_FAILURE": "FAILURE",
  "NOTIFICATION_TYPE_INFO": "INFO",
  "NOTIFICATION_TYPE_WARNING": "WARNING",
}

const notificationTypeColor = {
  "NOTIFICATION_TYPE_SUCCESS_COLOR": "#67b112",
  "NOTIFICATION_TYPE_FAILURE_COLOR": "#c65959",
  "NOTIFICATION_TYPE_INFO_COLOR": "#195997",
  "NOTIFICATION_TYPE_WARNING_COLOR": "#ded400",
}

const notificationTypeImg = {
  "NOTIFICATION_TYPE_SUCCESS_IMG": "success.svg",
  "NOTIFICATION_TYPE_FAILURE_IMG": "danger.svg",
  "NOTIFICATION_TYPE_INFO_IMG": "info.svg",
  "NOTIFICATION_TYPE_WARNING_IMG": "warn.svg",
}
export {notificationTypeImg, notificationTypeColor}


// If you wanna add more notification types please add the new type @/data/Notify_Types.js