interface notificationsType {
  text: string;
  time: string;
}

export const notificationsMsg = [
  {
    text: "Congratulations, your advance request has been accepted.",
    time: "12:05",
  },
  {
    text: "Unfortunately, your advance request has been rejected.",
    time: "01:5",
  },
  {
    text: "The month has closed. A new month has begun with new goals. We wish you all the best.",
    time: "05:30",
  },
  {
    text: "Congratulations, you have received your salary.",
    time: "2024-09-30",
  },
  {
    text: "Congratulations, the advance amount has been sent.",
    time: "2024-06-5",
  },
  {
    text: "Your advance request has been sent successfully. It is now under review.",
    time: "2024-04-5",
  },
] as notificationsType[];
