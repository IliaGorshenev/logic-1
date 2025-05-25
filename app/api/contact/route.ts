import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Пожалуйста, заполните все обязательные поля' }, { status: 400 });
    }

    // Telegram bot configuration
    const botToken = '7914253786:AAFIons6pe2XKs_JEQj2iYPPMkrWgsv2E5w';
    const chatId = '-4939358342';

    // Format message for Telegram
    const telegramMessage = `
🔔 *Новая заявка с сайта*

👤 *Имя*: ${name}
📧 *Email*: ${email}
📱 *Телефон*: ${phone}
${message ? `💬 *Сообщение*: ${message}` : ''}
    `;

    // Send message to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', telegramData);
      return NextResponse.json({ error: 'Не удалось отправить сообщение. Пожалуйста, попробуйте позже.' }, { status: 500 });
    }

    // You could also save the form data to a database here if needed

    return NextResponse.json({
      success: true,
      message: 'Сообщение успешно отправлено',
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Произошла ошибка при обработке формы. Пожалуйста, попробуйте позже.' }, { status: 500 });
  }
}
