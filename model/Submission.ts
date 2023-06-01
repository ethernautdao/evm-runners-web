export default interface Submission {
  bytecode: string;
  discriminator: number;
  gas: string;
  id: number;
  level_id: number;
  optimized_for: string;
  size: string;
  submitted_at: string;
  type: string;
  user_id: number;
  user_name: string;
}
