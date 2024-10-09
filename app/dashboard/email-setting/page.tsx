"use client"

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  applicationConfirmation: z.string().min(1, 'テンプレートは必須です'),
  reminderEmail: z.string().min(1, 'テンプレートは必須です'),
  followUpEmail: z.string().min(1, 'テンプレートは必須です'),
});

export default function EmailSettingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      applicationConfirmation: '',
      reminderEmail: '',
      followUpEmail: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Here you would typically send the email templates to your backend
    console.log(values);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Eメール設定が保存されました",
        description: "新しいテンプレートが適用されます。",
      });
    }, 2000);
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Eメール設定</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="applicationConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>申込確認メール</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="申込確認メールのテンプレートを入力してください"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {'{name}'} でユーザー名、{'{date}'} で申込日を挿入できます。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="reminderEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>リマインダーメール</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="リマインダーメールのテンプレートを入力してください"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {'{name}'} でユーザー名、{'{seminar_date}'} でセミナー日を挿入できます。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="followUpEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>フォローアップメール</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="フォローアップメールのテンプレートを入力してください"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {'{name}'} でユーザー名、{'{feedback_link}'} でフィードバックリンクを挿入できます。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '保存中...' : '保存'}
          </Button>
        </form>
      </Form>
    </div>
  );
}