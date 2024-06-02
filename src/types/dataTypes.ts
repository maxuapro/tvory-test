/**
 * Invitation status type
 */
export type InviteStatus = "sent" | "draft";
/**
 * Array of strings
 */
export type Tag = string | undefined;
/**
 * Invitation data type
 */
export interface IInviteCard {
  id: string;
  status: InviteStatus;
  email?: string;
  phone?: string;
  time: string;
  location: string;
  title: string;
  text: string;
  tags: Tag[];
}
