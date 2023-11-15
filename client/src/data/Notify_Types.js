// Credit: @Bootstrap for 'type' values
import NOTIFICATION_TYPES, {
  notificationTypeImg,
  notificationTypeColor,
} from "../cofigs/notificationTypes";
export default [
  {
    type: NOTIFICATION_TYPES.NOTIFICATION_TYPE_SUCCESS,
    icon: notificationTypeImg.NOTIFICATION_TYPE_SUCCESS_IMG,
    theme: notificationTypeColor.NOTIFICATION_TYPE_SUCCESS_COLOR,
  },
  {
    type: NOTIFICATION_TYPES.NOTIFICATION_TYPE_FAILURE,
    icon: notificationTypeImg.NOTIFICATION_TYPE_FAILURE_IMG,
    theme: notificationTypeColor.NOTIFICATION_TYPE_FAILURE_COLOR,
  },
  {
    type: NOTIFICATION_TYPES.NOTIFICATION_TYPE_WARNING,
    icon: notificationTypeImg.NOTIFICATION_TYPE_WARNING_IMG,
    theme: notificationTypeColor.NOTIFICATION_TYPE_WARNING_COLOR,
  },
  {
    type: NOTIFICATION_TYPES.NOTIFICATION_TYPE_INFO,
    icon: notificationTypeImg.NOTIFICATION_TYPE_INFO_IMG,
    theme: notificationTypeColor.NOTIFICATION_TYPE_INFO_COLOR,
  },
];

// If you wanna add more notification types please add the new type @/configs/notificationTypes.js
