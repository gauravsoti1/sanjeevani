import Filter from 'bad-words';
import { query } from '../../lib/db';

const filter = new Filter();

const handler = async (req, res) => {
  const {
    content = '',
    title = 'New Blog',
    description = '',
    thumbnail = '',
  } = req.body;
  try {
    // if (!content) {
    //   return res.status(400).json({ message: '`content` is required' });
    // }

    const results = await query(
      `
      INSERT INTO blogs (title,content,description,thumbnail)
      VALUES (?,?,?,?)
      `,
      [
        title,
        content,
        description,
        thumbnail,
        // filter.clean(title),
        // filter.clean(content),
        // filter.clean(description),
        // filter.clean(thumbnail),
      ]
    );
    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message, m: e.stack });
  }
};

export default handler;
