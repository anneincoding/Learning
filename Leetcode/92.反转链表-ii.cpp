/*
 * @lc app=leetcode.cn id=92 lang=cpp
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseN(ListNode *head, int n) {
        if (n == 1) return head;
        ListNode *tail = head -> next, *prev = reverseN(head -> next, n -1);
        head -> next = tail -> next;
        tail -> next = head;
        return prev;
    }
    ListNode* reverseBetween(ListNode* head, int left, int right) {
        if (head == nullptr || head -> next == nullptr) return head;
        ListNode virtualHead(0, head), *p = virtualHead;
        int cnt = right - left + 1;
        while (--left) p = p -> next;
        p -> next = reverseN(p -> next, cnt);
        return virtualHead.next;
    }
};
// @lc code=end

