import dayjs from 'dayjs';

// 日付のフォーマット
export const formatDate = (date: Date, formatType: string) =>
  dayjs(date).format(formatType);
