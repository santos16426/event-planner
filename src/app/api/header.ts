import { auth } from '@clerk/nextjs';

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: {
        (arg0: { userId?: string | null; error?: string }): void;
        new (): any;
      };
    };
  }
) {
  try {
    const { userId } = await auth();
    res.status(200).json({ userId });
  } catch (error) {
    console.error('Error fetching authentication information:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
