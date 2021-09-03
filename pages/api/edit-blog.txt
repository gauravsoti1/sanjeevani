import Filter from 'bad-words';
import { query } from '../../lib/db';

const filter = new Filter();

const handler = async (req, res) => {
  const {
    id,
    title = '',
    content = '',
    description = '',
    thumbnail = '',
  } = req.body;
  try {
    // if (!id || !title || !content) {
    //   return res
    //     .status(400)
    //     .json({ message: '`id`,`title`, and `content` are all required' })
    // }

    if (!id) {
      return res.status(400).json({ message: '`id` is required' });
    }

    const results = await query(
      `
      UPDATE entries
      SET title = ?, content = ?, description = ?, thumbnail = ?
      WHERE id = ?
      `,
      [title, content, description, thumbnail, id]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
